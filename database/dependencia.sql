/* Vista dependencias */
CREATE VIEW view_dependencias AS 
SELECT * FROM dependencias 
WHERE estado = 'Activo';

SELECT * FROM view_dependencias


DROP VIEW view_dependencias;

/* Procedimiento registrar dependencias */
DELIMITER $$
CREATE PROCEDURE sp_registrarDependencia(
    new_nombre	varchar(100),
    new_estado	varchar(10)
)
BEGIN
	INSERT INTO dependencias (nombre, estado) 
    VALUES (new_nombre, new_estado);
END
$$

CALL sp_registrarDependencia('Exportación','Inactivo');

/* Procedimiento actualizar */
DELIMITER $$
CREATE PROCEDURE sp_actualizarDependencia(
	IN new_id 	int(11),
    IN new_nombre	varchar(100)
)
	BEGIN
    	UPDATE dependencias 
        SET nombre=new_nombre 
		where id=new_id;
    END

$$

CALL sp_actualizarDependencia(9,'Cambio');

/* Eliminar dependicias */

DELETE FROM dependencias WHERE id=6; /* eliminado fisico */


UPDATE dependencias SET estado='Inactivo' WHERE id=1; /* eliminado lógico - Inactivo */

/* Procedimiento elimibar dependencias */
DELIMITER $$
CREATE PROCEDURE sp_EliminarDependencia(
	IN new_id INT
)
BEGIN
	DELETE FROM dependencias WHERE id=new_id;
END
$$

CALL sp_EliminarDependencia(10);


DELIMITER $$
CREATE PROCEDURE sp_DarBajaDependencia(
	IN new_id INT
)
BEGIN
	UPDATE dependencias SET estado='Inactivo' WHERE id=new_id;
END
$$

CALL sp_DarBajaDependencia(11);