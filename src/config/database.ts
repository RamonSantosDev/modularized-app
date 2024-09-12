import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://bd_ramon_user:seBG09OulGm7PjXuhcpX8DOoVWL23bUS@dpg-crcs0h52ng1s73d2ec8g-a.oregon-postgres.render.com/bd_ramon';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;