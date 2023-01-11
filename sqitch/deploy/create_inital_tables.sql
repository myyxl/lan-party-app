-- Deploy lan-party-app:create_inital_tables to pg

BEGIN;

CREATE TYPE user_role AS ENUM ('ADMIN', 'SHOPPER', 'USER');
CREATE TYPE invoice_type AS ENUM ('SHOPPING', 'RENT', 'OTHER');

CREATE TABLE users (
    username VARCHAR(15) PRIMARY KEY NOT NULL,
    displayname VARCHAR(15) NOT NULL,
    role user_role DEFAULT 'USER',
    password_hash CHAR(60) NOT NULL
);

CREATE TABLE lan (
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    city VARCHAR(20),
    address VARCHAR(50)
);

CREATE TABLE invoice (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    payer varchar REFERENCES users (username) ON DELETE SET NULL,
    receiver varchar REFERENCES users (username) ON DELETE SET NULL,
    created_by varchar REFERENCES users (username) ON DELETE SET NULL,
    title VARCHAR(50) NOT NULL,
    invoice_type invoice_type NOT NULL DEFAULT 'OTHER',
    amount INTEGER NOT NULL,
    paid BOOLEAN DEFAULT false
);

COMMIT;
