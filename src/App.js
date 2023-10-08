import React, { useState, useRef } from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  Users,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  function deleteUser(usersId) {
    const newUsers = users.filter(user => user.id !== usersId)
    setUsers(newUsers)

  }

  return (
    <Container>
      <Image alt="pessoas" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Digite seu Nome"></Input>
        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua Idade"></Input>
        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((users) => (
            <Users key={users.id}>
              <p>{users.name}</p> <p>{users.age}</p>
              <button onClick={() => deleteUser(users.id)}>
                <img src={Trash} alt="Lixeira" />
              </button>
            </Users>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
