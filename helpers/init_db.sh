#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER postgres;
	CREATE ROLE postgres with SUPERUSER PASSWORD 'desi12345';
	CREATE DATABASE betdb;
	GRANT ALL PRIVILEGES ON DATABASE betdb TO postgres;
EOSQL
