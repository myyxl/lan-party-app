-- Revert lan-party-app:create_inital_tables from pg

BEGIN;

DROP TABLE users;
DROP TABLE invoice;
DROP TABLE lan;
DROP TYPE invoice_type;
DROP TYPE user_role;

COMMIT;
