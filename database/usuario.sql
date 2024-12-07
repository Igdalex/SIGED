/* Crear usuarios */
DELIMITER $$
CREATE PROCEDURE spRegistrarUsuario(
	IN new_tipo_documento INT(16),
    IN new_nro_documento INT(16),
    IN new_apellidos varchar(50),
    IN new_nombre varchar(50),
    IN new_pass_word varchar(20),
    IN new_fecha_nacimiento varchar(20),
    IN new_direccion varchar(255),
    IN new_genero varchar(10)
)
	BEGIN
    	INSERT INTO usuarios(id_tipo_documento, nro_documento, apellidos, nombre, pass_word, fecha_nacimiento, direccion, genero) 			
        VALUES (new_tipo_documento,new_nro_documento,new_apellidos,new_nombre,new_pass_word,new_fecha_nacimiento,new_direccion,new_genero);
    END
$$

DROP PROCEDURE spRegistrarUsuario;

CALL spRegistrarUsuario(1,'455567','Caceres Torres','Fernando','56777','1990-08-05','Alto Bosque','M');


/* Listas usuarios */
CREATE VIEW view_usuarios AS
SELECT * FROM usuarios
WHERE estado = 'Activo';


CREATE VIEW view_usuarios_gestor AS
SELECT nro_documento, apellidos, nombre, genero, direccion, estado 
FROM usuarios
WHERE estado = 'Activo'

/* Procedimeinto para actualizar usuario */
DELIMITER $$
CREATE PROCEDURE spActualizarUsuario (
	IN new_id INT(16),
    IN new_tipo_documento INT(16),
    IN new_nro_documento INT(16),
    IN new_apellidos varchar(50),
    IN new_nombre varchar(50),
    IN new_pass_word varchar(20),
    IN new_fecha_nacimiento varchar(20),
    IN new_direccion varchar(255),
    IN new_genero varchar(10)
)
BEGIN
	UPDATE usuarios
    SET 
    id_tipo_documento = new_tipo_documento,
    nro_documento = new_nro_documento,
    apellidos = new_apellidos,
    nombre = new_nombre,
    pass_word = new_pass_word,
    fecha_nacimiento = new_fecha_nacimiento,
    direccion = new_direccion,
    genero = new_genero
    WHERE id = new_id;
    
END
$$

DROP PROCEDURE spActualizarUsuario;

CALL spActualizarUsuario(3,1,'455567','Caceresp Torreps','Fernandop','56777','1990-08-05','Alto Bosquep','M');


/* Prcedimiento eliminar usuario */
DELIMITER $$
CREATE PROCEDURE spEliminarUsuario (
    	IN new_id INT(16)
    )
    BEGIN
    	DELETE FROM usuarios
        WHERE id = new_id;
    END

$$


CALL spEliminarUsuario(4);
