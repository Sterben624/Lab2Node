const apiService = require('../services/apiService');

const getHelloWorld = async (req, res) => {
    try {
        const response = await apiService.getHelloWorld();
        res.send(response);
    } catch (error) {
        console.error('Error retrieving data from API:', error); // Виводимо всю інформацію про помилку
        res.status(500).send('Error retrieving data from API');
    }
};

module.exports = { getHelloWorld };
