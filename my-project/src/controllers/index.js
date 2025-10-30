class IndexController {
    static async getIndex(req, res) {
        res.send('Welcome to the Index!');
    }

    static async getData(req, res) {
        // Logic to retrieve data
        res.json({ message: 'Data retrieved successfully!' });
    }

    // Add more methods as needed
}

export default IndexController;