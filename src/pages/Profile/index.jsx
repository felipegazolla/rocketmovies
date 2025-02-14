import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth"
import avatarplaceholder from "../../assets/placeholder_img.svg"
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router";

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarplaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <ButtonText 
          icon={FiArrowLeft} 
          title="Voltar" 
          onClick={handleBack}
        >
        </ButtonText>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser} 
          value={name} 
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
          title="Salvar" 
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  )
}