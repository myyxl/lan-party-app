import pgk, {QueryResult} from "pg";

export async function select<T>(table: string, columns: string[], where?: Where): Promise<T[]> {
    const db = new pgk.Client();
    await db.connect();
    const query = `SELECT ${columns.join(',')} FROM ${table} ${where ? 'WHERE ' + where.query : ''};`;
    const result = await db.query(query, where?.parameters);
    await db.end();
    return result.rows.map(row => row as T);
}


export type Where = {
    query: string,
    parameters: string[]
};
export function where(columns: string[], parameters: string[]): Where {
    return {
        query:
            columns.map((column, index) => {
                return `${column} = $${index + 1}`
            }).join(' AND '),
        parameters
    }
}