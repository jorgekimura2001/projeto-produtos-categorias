import database from "../../database"

const listRetrieveProductService = async (id) => {
    try {
        const res = await database.query(
            `SELECT * FROM products WHERE id = $1;`, [id]
        )
        
        if(res.rowCount === 0){
            throw new Error('Product not found')
        }

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default listRetrieveProductService