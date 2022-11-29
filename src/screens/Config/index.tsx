import {
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from "native-base";
import React, { useContext, useState } from "react";
import {
  DatabaseContext,
  DatabaseContextProps,
} from "../../../database/context";
import { Client } from "../../../database/entities/client";

export function Config() {
  const { database } = useContext(DatabaseContext) as DatabaseContextProps;

  const [quantidade, setQuantidade] = useState<string>("0");
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);

  function createRandom() {
    setLoadingCreate(true);

    setLoadingCreate(false);
  }

  async function clearDatabase() {
    setLoadingDelete(true);

    await database.getRepository(Client).clear();

    setLoadingDelete(false);
  }

  return (
    <>
      <Center my={6}>
        <Text fontWeight={"bold"} color={"gray.600"}>
          Configurações
        </Text>
      </Center>

      <Center>
        <VStack w={"80%"}>
          <Button
            colorScheme={"danger"}
            onPress={clearDatabase}
            isLoading={loadingDelete}
          >
            <Text color={"white"}>Limpar Banco de Dados</Text>
          </Button>

          <Center>
            <Text my={4}>Criar Dados Aleatórios</Text>
          </Center>

          <HStack space={4}>
            <FormControl isRequired flex={0.5}>
              <Input
                placeholder="Quantidade"
                onChangeText={(text) => setQuantidade(text)}
              />
            </FormControl>

            <Button
              flex={0.5}
              w={"60%"}
              onPress={createRandom}
              isLoading={loadingCreate}
            >
              Criar
            </Button>
          </HStack>
        </VStack>
      </Center>
    </>
  );
}
