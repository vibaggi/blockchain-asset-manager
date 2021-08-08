import { TextInput, Tile } from "carbon-components-react"
import { useDispatch, useSelector } from "react-redux";
import { updatecaPassword, updatecaURL, updatecaUser, updateCPURL, updateNome } from "../../store/features/envs";


function EnvCard(props){
    let index = props.index
    let env = useSelector(state => state.envs.value[index])
    const dispatch = useDispatch()
    return(
        <Tile>
            <div className="bx--grid bx--grid-full-width">
                <div className="bx--row">
                    <TextInput value={env.nome} placeholder="NOME AMBIENTE" 
                        onChange={e => dispatch(updateNome({index: props.index, nome: e.target.value}))}
                        labelText="Nome do ambiente" id={"inputNomeAmbiente"+props.index}>
                    </TextInput>
                </div>
                <div className="bx--row">
                    <TextInput 
                        placeholder="https://xxxxx.xxx" value={env.caURL} 
                        onChange={e => dispatch(updatecaURL({index: props.index, caURL: e.target.value}))}
                        labelText="URL da CA" id={"inputCAURL"+props.index}>
                    </TextInput> 
                </div>
                <div className="bx--row">
                    <TextInput placeholder="/AAAA/AAAA" value={env.CPURL} 
                    onChange={e => dispatch(updateCPURL({index: props.index, CPURL: e.target.value}))}
                    labelText="URL do Connection Profile" id={"inputCPURL"+props.index}>
                    </TextInput>
                </div>
                <div className="bx--row">
                    <TextInput placeholder="" value={env.caUser} 
                        onChange={e => dispatch(updatecaUser({index: props.index, caUser: e.target.value}))}
                        labelText='Usuário' id={"inputCAUser"+props.index}>
                    </TextInput>
                </div>
                <div className="bx--row">
                    <TextInput.PasswordInput placeholder="" value={env.caPassword} 
                        onChange={e => dispatch(updatecaPassword({index: props.index, caPassword: e.target.value}))}
                        labelText='Senha' id={"inputSenha"+props.index}>
                    </TextInput.PasswordInput>
                </div>
            </div>
        </Tile>
    )
}

export default EnvCard;