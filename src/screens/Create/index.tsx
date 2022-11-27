import React, { useContext, useEffect } from "react";
import { Box, Text } from "native-base";
import {
  DatabaseContext,
  DatabaseContextProps,
} from "../../context/databaseContext";
import { Client } from "../../../database/entities/client";

export function Create() {
  const { database } = useContext(DatabaseContext) as DatabaseContextProps;

  useEffect(() => {
    async function load() {
      const client = new Client();

      client.nome = "Dev Fazer";
      client.razaoSocial = "Dev Fazer LTDA.";
      client.cpfCnpj = "123";
      client.endereco = "IFSP Guarulhos";
      client.municipio = "Guarulhos";
      client.uf = "São Paulo";

      const clientRepository = database.getRepository(Client);

      await clientRepository.save(client);

      console.log("Sucesso na criação do cliente:", client.id);

      const loadedClient = await clientRepository.findOne({
        where: { id: client.id },
      });

      if (loadedClient) {
        console.log("Cliente carregado: ", loadedClient);
      }
    }

    load();
  }, []);

  return (
    <Box>
      <Text>Create</Text>
    </Box>
  );
}
