// Google Sheets Data Utility
// This file handles the integration with Google Sheets data

// Sample data structure that matches your Google Sheets format
export const sampleProductsData = [{
        id: 1,
        name: "Maglife Single Bottle",
        price: 40,
        description: "Perfect for trying out or on-the-go hydration. Premium magnesium-enriched water for daily wellness.",
        volume: "1L",
        magnesiumContent: "18-24mg/L",
        imageURL: "/new-bottle.png"
    },];

// Function to fetch data from Google Sheets CSV export
export const fetchGoogleSheetsData = async () => {
    try {
        // IMPORTANT: To use this, you need to:
        // 1. Go to your Google Sheets
        // 2. File → Share → Publish to web
        // 3. Choose "Entire Document" and "CSV" format
        // 4. Copy the CSV URL and replace the one below

        // Your Google Sheets CSV URL (replace this with your actual CSV URL)
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQaCzJ-G4QW_e2wEtESOWwUlE7iEmV95WyzBJd6fGKChFz9Zn8kibYRVxxCJEhYogts3H7dDT8XsKLv/pub?gid=0&single=true&output=csv';

        const response = await fetch(csvUrl);

        if (! response.ok) {
            throw new Error(`HTTP error! status: ${
                response.status
            }`);
        }

        const csvText = await response.text();

        const products = parseCSVData(csvText);

        // Always ensure we return valid data
        if (products && Array.isArray(products) && products.length > 0) {
            return products;
        } else {
            return sampleProductsData;
        }

    } catch (error) { // Return sample data as fallback
        return sampleProductsData;
    }
};

// Function to parse Google Sheets CSV data
export const parseCSVData = (csvText) => {
    try {
        const lines = csvText.split('\n').filter(line => line.trim());

        if (lines.length < 2) {
            return [];
        }

        // Parse headers (first row)
        const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, '').toLowerCase());

        const products = [];

        // Parse data rows (starting from second row)
        for (let i = 1; i < lines.length; i++) {

            if (lines[i].trim()) {
                const values = lines[i].split(',').map(value => value.trim().replace(/"/g, ''));

                if (values.length >= headers.length) {
                    const product = {};

                    headers.forEach((header, index) => {
                        if (values[index] !== undefined) {
                            product[header] = values[index];
                        }
                    });

                    // Map CSV columns to our expected format
                    const mappedProduct = {
                        id: parseInt(product.id || product['id'] || i),
                        name: product.name || product['name'] || product['product name'] || 'Unknown Product',
                        price: parseInt(product.price || product['price'] || product['cost'] || 0),
                        description: product.description || product['description'] || product['desc'] || 'No description available',
                        volume: product.volume || product['volume'] || product['size'] || 'N/A',
                        magnesiumContent: product.magnesiumcontent || product['magnesium content'] || product['mg content'] || 'N/A',
                        imageURL: product.imageurl || product['image url'] || product['image'] || "/new-bottle.png"
                    };

                    // Only add valid products
                    if (mappedProduct.name && mappedProduct.name !== 'Unknown Product' && mappedProduct.price > 0) {
                        products.push(mappedProduct);
                    }
                }
            }
        }

        return products;

    } catch (error) {
        return [];
    }
};

// Function to validate product data
export const validateProductData = (product) => {
    const requiredFields = [
        'name',
        'price',
        'description',
        'volume',
        'magnesiumContent'
    ];

    for (const field of requiredFields) {
        if (!product[field]) {
            return false;
        }
    }

    return true;
};

// Function to format price
export const formatPrice = (price) => {
    return `₹${price}`;
};

// Function to get product by ID
export const getProductById = (products, id) => {
    return products.find(product => product.id === id);
};

// Function to filter products by criteria
export const filterProducts = (products, criteria) => {
    return products.filter(product => {
        if (criteria.minPrice && product.price<criteria.minPrice) return false;
        if (criteria.maxPrice && product.price> criteria.maxPrice) 
            return false;
        


        if (criteria.searchTerm && !product.name.toLowerCase().includes(criteria.searchTerm.toLowerCase())) 
            return false;
        


        return true;
    });
};
