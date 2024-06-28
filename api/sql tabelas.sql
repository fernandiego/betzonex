CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY
);

-- Create table atletas
CREATE TABLE atletas (
    id SERIAL PRIMARY KEY
);

-- Create table provas
CREATE TABLE provas (
    id SERIAL PRIMARY KEY
);

-- Create table palpites
CREATE TABLE palpites (
    id SERIAL PRIMARY KEY
);

-- Create table competicoes
CREATE TABLE competicoes (
    id SERIAL PRIMARY KEY
);


-- Add the 'name' column
ALTER TABLE usuarios ADD COLUMN name VARCHAR(255);

-- Add the 'cpf' column with a unique constraint
ALTER TABLE usuarios ADD COLUMN cpf VARCHAR(11) UNIQUE;

-- Add the 'password' column
ALTER TABLE usuarios ADD COLUMN password VARCHAR(255);


INSERT INTO usuarios (name, cpf, password) VALUES ('fox', '02573584399', '123');
