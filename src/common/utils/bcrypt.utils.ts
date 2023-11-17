import * as bcrypt from 'bcrypt';

export class BcryptUtils{
    static saltOrRounds = 10;

    static async criptografarSenha(senha:string){
        return await bcrypt.hash(senha,this.saltOrRounds);
    }

    static async compararSenhas(senha, senhaCriptografada){
        return await bcrypt.compare(senha, senhaCriptografada);
    }
}