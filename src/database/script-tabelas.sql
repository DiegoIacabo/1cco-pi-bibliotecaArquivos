CREATE DATABASE arkhaios;

USE arkhaios;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id),
    PRIMARY KEY (id, fk_empresa)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table estante (
	id INT PRIMARY KEY AUTO_INCREMENT,
	secao VARCHAR(10),
    descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL(3,1),
	dht11_temperatura DECIMAL(3,1),
	dt_medida DATETIME,
	fk_estante INT,
	FOREIGN KEY (fk_estante) REFERENCES estante(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');

INSERT INTO estante (secao, descricao, fk_empresa) VALUES
('A1', 'Estante da seção A1 - Cartas', 1),
('A2', 'Estante da seção A2 - Livros', 1),
('A3', 'Estante da seção A3 - Quadros', 1),
('B1', 'Estante da seção B1 - Cartas', 2),
('B2', 'Estante da seção B2 - Livros', 2),
('B3', 'Estante da seção B3 - Quadros', 2);

INSERT INTO medida (dht11_umidade, dht11_temperatura, dt_medida, fk_estante) VALUES
(45.2, 22.5, NOW(), 1),
(46.1, 22.8, NOW(), 1),
(44.8, 22.4, NOW(), 1),
(47.0, 23.0, NOW(), 1),
(45.9, 22.7, NOW(), 1),
(46.5, 22.9, NOW(), 1),
(45.0, 22.3, NOW(), 1),
(44.6, 22.1, NOW(), 1),
(47.2, 23.1, NOW(), 1),
(46.8, 22.6, NOW(), 1),

(48.1, 23.5, NOW(), 2),
(49.0, 23.8, NOW(), 2),
(47.5, 23.2, NOW(), 2),
(50.2, 24.0, NOW(), 2),
(48.9, 23.6, NOW(), 2),
(49.4, 23.9, NOW(), 2),
(47.8, 23.1, NOW(), 2),
(48.3, 23.4, NOW(), 2),
(49.7, 24.1, NOW(), 2),
(48.6, 23.7, NOW(), 2),

(64.0, 20.2, NOW(), 3),
(63.5, 20.1, NOW(), 3),
(65.1, 20.4, NOW(), 3),
(64.3, 20.3, NOW(), 3),
(63.9, 20.0, NOW(), 3),
(65.4, 20.5, NOW(), 3),
(64.1, 20.2, NOW(), 3),
(63.7, 20.0, NOW(), 3),
(64.9, 20.4, NOW(), 3),
(65.0, 20.3, NOW(), 3),

(60.5, 18.9, NOW(), 4),
(61.2, 19.1, NOW(), 4),
(59.8, 18.7, NOW(), 4),
(62.0, 19.3, NOW(), 4),
(60.9, 18.8, NOW(), 4),
(61.7, 19.0, NOW(), 4),
(59.6, 18.6, NOW(), 4),
(60.3, 18.9, NOW(), 4),
(61.5, 19.2, NOW(), 4),
(60.7, 18.8, NOW(), 4),

(52.3, 21.9, NOW(), 5),
(53.1, 22.2, NOW(), 5),
(51.8, 21.8, NOW(), 5),
(54.0, 22.4, NOW(), 5),
(52.9, 22.0, NOW(), 5),
(53.6, 22.3, NOW(), 5),
(51.7, 21.7, NOW(), 5),
(52.4, 22.1, NOW(), 5),
(53.8, 22.5, NOW(), 5),
(52.6, 21.9, NOW(), 5),

(70.3, 17.5, NOW(), 6),
(69.8, 17.3, NOW(), 6),
(71.2, 17.7, NOW(), 6),
(70.5, 17.6, NOW(), 6),
(69.9, 17.4, NOW(), 6),
(71.0, 17.8, NOW(), 6),
(70.1, 17.5, NOW(), 6),
(69.7, 17.2, NOW(), 6),
(71.3, 17.9, NOW(), 6),
(70.6, 17.6, NOW(), 6);
