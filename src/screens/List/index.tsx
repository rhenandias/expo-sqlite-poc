import React, { useContext, useEffect, useState } from "react";
import { Box, Center, Flex, Icon, IconButton, Text, VStack } from "native-base";

import { DatabaseContext, DatabaseContextProps } from "../../../database/context";
import { Client } from "../../../database/entities/client";

import { Entypo } from "@expo/vector-icons";

function ClientCard(client: Client) {
  return (
    <VStack padding={4} space={2} rounded="lg" bgColor="white">
      <Flex flexDirection={"row"} justify={"space-between"}>
        <Text fontWeight={"bold"}>Nome:</Text>
        <Text>{client.nome}</Text>
      </Flex>
      <Flex flexDirection={"row"} justify={"space-between"}>
        <Text fontWeight={"bold"}>Razão Social:</Text>
        <Text>{client.razaoSocial}</Text>
      </Flex>
      <Flex flexDirection={"row"} justify={"space-between"}>
        <Text fontWeight={"bold"}>CPF / CNPJ:</Text>
        <Text>{client.cpfCnpj}</Text>
      </Flex>
      <Flex flexDirection={"row"} justify={"space-between"}>
        <Text fontWeight={"bold"}>Endereço:</Text>
        <Text>
          {client.endereco} - {client.uf}
        </Text>
      </Flex>
      <Flex flexDirection={"row"} justify={"flex-end"}>
        <IconButton
          icon={<Icon as={Entypo} name="emoji-happy" />}
          borderRadius="full"
          _icon={{
            color: "orange.500",
            size: "md",
          }}
          _hover={{
            bg: "orange.600:alpha.20",
          }}
          _pressed={{
            bg: "orange.600:alpha.20",
            _icon: {
              name: "emoji-flirt",
            },
            _ios: {
              _icon: {
                size: "2xl",
              },
            },
          }}
          _ios={{
            _icon: {
              size: "2xl",
            },
          }}
        />
      </Flex>
    </VStack>
  );
}

export function List() {
  const { database } = useContext(DatabaseContext) as DatabaseContextProps;

  const [clients, setClients] = useState<Client[]>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function load() {
      const clientRespository = database.getRepository(Client);

      const clients = await clientRespository.find();

      setClients(clients);
      setLoaded(true);
    }

    load();
  }, []);

  return (
    <>
      <Center my={6}>
        <Text fontWeight={"bold"} color={"gray.600"}>
          Listar Clientes
        </Text>
      </Center>

      <Center mt={4}>
        <VStack w={"90%"}>
          {loaded && (
            <>
              {clients?.map((client) => (
                <ClientCard
                  key={client.id}
                  id={client.id}
                  nome={client.nome}
                  razaoSocial={client.razaoSocial}
                  cpfCnpj={client.cpfCnpj}
                  endereco={client.endereco}
                  municipio={client.municipio}
                  uf={client.uf}
                />
              ))}
            </>
          )}
        </VStack>
      </Center>

      {!loaded && (
        <>
          <Center>
            <Text>Carregando</Text>
          </Center>
        </>
      )}
    </>
  );
}
