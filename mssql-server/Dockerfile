# mcr.microsoft.com/mssql/server:2019-latest
FROM mcr.microsoft.com/mssql/server:2019-latest

# Create a directory for copy backup.bak file
RUN mkdir /usr/backup

# Copy backup.bak file to container
COPY ./backup.bak /usr/backup


# create a empty database for restore after
# docker exec -it mssqldata /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Agenzia2022Pass -Q "CREATE DATABASE agenzia"

# RUN /opt/mssql/bin/sqlservr & \
#   sleep 20s && \
#   /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'yourStrong(!)Password' -Q "CREATE DATABASE agenzia"

# Run Microsoft SQl Server and initialization script (at the same time)
# CMD /bin/bash ./entrypoint.sh



# docker exec -it mssqldata /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Agenzia2022Pass -Q "CREATE DATABASE agenzia"
# RUN /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Agenzia2022Pass -Q "CREATE DATABASE [agenzia]"

# restore database from backup.bak file
# docker exec -it mssqldata /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Agenzia2022Pass -Q "RESTORE DATABASE agenzia FROM DISK = '/usr/backup/backup.bak' WITH MOVE 'Agenzia' TO '/var/opt/mssql/data/Agenzia.mdf', MOVE 'Agenzia_log' TO '/var/opt/mssql/data/Agenzia_log.ldf', REPLACE, STATS = 5"
# RUN /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Agenzia2022Pass -Q "RESTORE DATABASE agenzia FROM DISK = '/usr/backup/backup.bak' WITH MOVE 'Agenzia' TO '/var/opt/mssql/data/Agenzia.mdf', MOVE 'Agenzia_log' TO '/var/opt/mssql/data/Agenzia_log.ldf', REPLACE, STATS = 5"

# verify that the database is restored
# RUN /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Agenzia2022Pass -Q "SELECT Name FROM sys.Databases"


