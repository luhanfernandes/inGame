const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const Bcrypt = require('bcrypt')
const connection = require('./database/conection')
const cadastrousuario = require('./database/cadastro_usuario')
const usuario = require('./database/cadastro_usuario')

//configurando o body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//configurando o ejs
app.set('view engine', 'ejs')

//configurando arquivos estaticos
app.use(express.static('public'))

//Configuração da conexão com o BD
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão realizada com sucesso!')
    }).catch((error)=>{
        console.log(error)
    })


//Rota home
app.get('/main', (req, res)=>{
    res.render('page/main')
})

//Rota Login
app.get('/login', (req, res)=>{
    res.render('login')
})

//Rota Cadastro
app.get('/cadastro', (req, res)=>{
    res.render('cadastro')
})

//Rota de Cadastro
app.post('/cadastro-usuario', (req, res)=>{
    var email = req.body.email
    var senha = req.body.senha

    var salt = Bcrypt.genSaltSync(10)
    var hash = Bcrypt.hashSync(senha, salt)

    cadastrousuario.create({
        email: email,
        senha: hash,
        senha_2: req.body.senha_2
        
    }).then(function(){
        res.redirect('/login')
    }).catch(function(erro){
        res.send('Houve erro no cadastro, cadastro não efetuado!' + erro)
    })
})

//Rota Logar com sucesso
app.post('/main', (req, res)=>{
    res.render('page/main')
   
})    

//Rota contato
app.get('/contato', (req, res)=>{
    res.render('contato')
})

//Rota de Jogadas
app.get('/jogadas', (req, res)=>{
    res.render('jogadas')
})

//Rota lol
app.get('/lol', (req, res)=>{
    res.render('page/lol')
})

//Rota cs
app.get('/cs', (req, res)=>{
    res.render('page/cs')
})

//Rota valorant
app.get('/valorant', (req, res)=>{
    res.render('page/valorant')
})

//Leage of Legends - ROTAS

//TOP

//Rota tutorial Fiora
app.get('/tutorial_fiora', (req, res)=>{
    res.render('page/tutorial_lol/top/tutorial_fiora')
})

//Rota tutorial Shen
app.get('/tutorial_shen', (req, res)=>{
    res.render('page/tutorial_lol/top/tutorial_shen')
})

//Rota tutorial Shen
app.get('/tutorial_darius', (req, res)=>{
    res.render('page/tutorial_lol/top/tutorial_darius')
})

//Rota tutorial Riven
app.get('/tutorial_riven', (req, res)=>{
    res.render('page/tutorial_lol/top/tutorial_riven')
})

//Rota tutorial Kayle
app.get('/tutorial_kayle', (req, res)=>{
    res.render('page/tutorial_lol/top/tutorial_kayle')
})

//Rota tutorial Yasuo
app.get('/tutorial_yasuo', (req, res)=>{
    res.render('page/tutorial_lol/top/tutorial_yasuo')
})

//JUNGLER

//Rota tutorial Amumu
app.get('/tutorial_amumu', (req, res)=>{
    res.render('page/tutorial_lol/jungler/tutorial_amumu')
})

//Rota tutorial Graves
app.get('/tutorial_graves', (req, res)=>{
    res.render('page/tutorial_lol/jungler/tutorial_graves')
})

//Rota tutorial KhaZix
app.get('/tutorial_khazix', (req, res)=>{
    res.render('page/tutorial_lol/jungler/tutorial_khazix')
})

//Rota tutorial Shaco
app.get('/tutorial_shaco', (req, res)=>{
    res.render('page/tutorial_lol/jungler/tutorial_shaco')
})

//Rota tutorial Olaf
app.get('/tutorial_olaf', (req, res)=>{
    res.render('page/tutorial_lol/jungler/tutorial_olaf')
})

//Rota tutorial Hecarim
app.get('/tutorial_hecarim', (req, res)=>{
    res.render('page/tutorial_lol/jungler/tutorial_hecarim')
})

//MID

//Rota tutorial Kassadin
app.get('/tutorial_kassadin', (req, res)=>{
    res.render('page/tutorial_lol/mid/tutorial_kassadin')
})

//Rota tutorial Morgana
app.get('/tutorial_morgana', (req, res)=>{
    res.render('page/tutorial_lol/mid/tutorial_morgana')
})

//Rota tutorial Yasuo
app.get('/tutorial_yasuo_mid', (req, res)=>{
    res.render('page/tutorial_lol/mid/tutorial_yasuo')
})

//Rota tutorial Syndra
app.get('/tutorial_syndra', (req, res)=>{
    res.render('page/tutorial_lol/mid/tutorial_syndra')
})

//Rota tutorial Katarina
app.get('/tutorial_katarina', (req, res)=>{
    res.render('page/tutorial_lol/mid/tutorial_katarina')
})

//Rota tutorial Ahri
app.get('/tutorial_ahri', (req, res)=>{
    res.render('page/tutorial_lol/mid/tutorial_ahri')
})

//ADC

//Rota tutorial Ashe
app.get('/tutorial_ashe', (req, res)=>{
    res.render('page/tutorial_lol/adc/tutorial_ashe')
})

//Rota tutorial Lucian
app.get('/tutorial_lucian', (req, res)=>{
    res.render('page/tutorial_lol/adc/tutorial_lucian')
})

//Rota tutorial Twitch
app.get('/tutorial_twitch', (req, res)=>{
    res.render('page/tutorial_lol/adc/tutorial_twitch')
})

//Rota tutorial Kaisa
app.get('/tutorial_kaisa', (req, res)=>{
    res.render('page/tutorial_lol/adc/tutorial_kaisa')
})

//Rota tutorial Draven
app.get('/tutorial_draven', (req, res)=>{
    res.render('page/tutorial_lol/adc/tutorial_draven')
})

//Rota tutorial Jinx
app.get('/tutorial_jinx', (req, res)=>{
    res.render('page/tutorial_lol/adc/tutorial_jinx')
})

//Suport

//Rota tutorial Janna
app.get('/tutorial_janna', (req, res)=>{
    res.render('page/tutorial_lol/suport/tutorial_janna')
})

//Rota tutorial Bardo
app.get('/tutorial_bardo', (req, res)=>{
    res.render('page/tutorial_lol/suport/tutorial_bardo')
})

//Rota tutorial Thresh
app.get('/tutorial_thresh', (req, res)=>{
    res.render('page/tutorial_lol/suport/tutorial_thresh')
})

//Rota tutorial Pyke
app.get('/tutorial_pyke', (req, res)=>{
    res.render('page/tutorial_lol/suport/tutorial_pyke')
})

//Rota tutorial Morgana
app.get('/tutorial_morgana_suport', (req, res)=>{
    res.render('page/tutorial_lol/suport/tutorial_morgana')
})

//Rota tutorial Nami
app.get('/tutorial_nami', (req, res)=>{
    res.render('page/tutorial_lol/suport/tutorial_bardo')
})


//ROTA CS GO

//MAPAS

//Rota Dust2
app.get('/tutorial_dust2', (req, res)=>{
    res.render('page/tutorial_cs/mapas/tutorial_dust2')
})

//Rota Mirage
app.get('/tutorial_mirage', (req, res)=>{
    res.render('page/tutorial_cs/mapas/tutorial_mirage')
})

//Rota Overpass
app.get('/tutorial_overpass', (req, res)=>{
    res.render('page/tutorial_cs/mapas/tutorial_overpass')
})

//Rota Train
app.get('/tutorial_train', (req, res)=>{
    res.render('page/tutorial_cs/mapas/tutorial_train')
})

//Rota Cache
app.get('/tutorial_cache', (req, res)=>{
    res.render('page/tutorial_cs/mapas/tutorial_cache')
})

//Rota Cache
app.get('/tutorial_inferno', (req, res)=>{
    res.render('page/tutorial_cs/mapas/tutorial_inferno')
})

//Rota das armas

//Rota AK-47
app.get('/tutorial_ak47', (req, res)=>{
    res.render('page/tutorial_cs/armas/tutorial_ak47')
})

//Rota AWP
app.get('/tutorial_awp', (req, res)=>{
    res.render('page/tutorial_cs/armas/tutorial_awp')
})

//Rota M4A4
app.get('/tutorial_m4a4', (req, res)=>{
    res.render('page/tutorial_cs/armas/tutorial_m4a4')
})

//Rota M4A1-S
app.get('/tutorial_m4a1s', (req, res)=>{
    res.render('page/tutorial_cs/armas/tutorial_m4a1s')
})

//Rota SSG
app.get('/tutorial_ssg', (req, res)=>{
    res.render('page/tutorial_cs/armas/tutorial_ssg')
})

//Rota AK-47
app.get('/tutorial_aug', (req, res)=>{
    res.render('page/tutorial_cs/armas/tutorial_aug')
})


//Pistolas

//Rota Usp
app.get('/tutorial_usp', (req, res)=>{
    res.render('page/tutorial_cs/pistolas/tutorial_usp')
})

//Rota Glock
app.get('/tutorial_glock', (req, res)=>{
    res.render('page/tutorial_cs/pistolas/tutorial_glock')
})

//Rota Desert
app.get('/tutorial_desert', (req, res)=>{
    res.render('page/tutorial_cs/pistolas/tutorial_desert')
})

//Rota Revolver
app.get('/tutorial_revolver', (req, res)=>{
    res.render('page/tutorial_cs/pistolas/tutorial_revolver')
})

//Rota fiveseven
app.get('/tutorial_fiveseven', (req, res)=>{
    res.render('page/tutorial_cs/pistolas/tutorial_fiveseven')
})

//Rota Dual
app.get('/tutorial_dual', (req, res)=>{
    res.render('page/tutorial_cs/pistolas/tutorial_dual')
})


//Valorant

//Mapas

//Ascent
app.get('/tutorial_ascent', (req, res)=>{
    res.render('page/tutorial_valorant/mapas/tutorial_ascent')
})

//Breeze
app.get('/tutorial_breeze', (req, res)=>{
    res.render('page/tutorial_valorant/mapas/tutorial_breeze')
})

//Fracture
app.get('/tutorial_fracture', (req, res)=>{
    res.render('page/tutorial_valorant/mapas/tutorial_fracture')
})

//haven
app.get('/tutorial_haven', (req, res)=>{
    res.render('page/tutorial_valorant/mapas/tutorial_haven')
})

//icebox
app.get('/tutorial_icebox', (req, res)=>{
    res.render('page/tutorial_valorant/mapas/tutorial_icebox')
})

//pearl
app.get('/tutorial_pearl', (req, res)=>{
    res.render('page/tutorial_valorant/mapas/tutorial_pearl')
})

//Armas

//sheriff
app.get('/tutorial_sheriff', (req, res)=>{
    res.render('page/tutorial_valorant/armas/tutorial_sheriff')
})

//phanton
app.get('/tutorial_phantom', (req, res)=>{
    res.render('page/tutorial_valorant/armas/tutorial_phanton')
})

//vandal
app.get('/tutorial_vandal', (req, res)=>{
    res.render('page/tutorial_valorant/armas/tutorial_vandal')
})

//operator
app.get('/tutorial_operator', (req, res)=>{
    res.render('page/tutorial_valorant/armas/tutorial_operator')
})

//guardian
app.get('/tutorial_guardian', (req, res)=>{
    res.render('page/tutorial_valorant/armas/tutorial_guardian')
})

//marshal
app.get('/tutorial_marshal', (req, res)=>{
    res.render('page/tutorial_valorant/armas/tutorial_marshal')
})

//Personagens

//jett
app.get('/tutorial_jett', (req, res)=>{
    res.render('page/tutorial_valorant/personagens/tutorial_jett')
})

//sage
app.get('/tutorial_sage', (req, res)=>{
    res.render('page/tutorial_valorant/personagens/tutorial_sage')
})

//omen
app.get('/tutorial_omen', (req, res)=>{
    res.render('page/tutorial_valorant/personagens/tutorial_omen')
})

//neon
app.get('/tutorial_neon', (req, res)=>{
    res.render('page/tutorial_valorant/personagens/tutorial_neon')
})

//viper
app.get('/tutorial_viper', (req, res)=>{
    res.render('page/tutorial_valorant/personagens/tutorial_viper')
})

//sova
app.get('/tutorial_sova', (req, res)=>{
    res.render('page/tutorial_valorant/personagens/tutorial_sova')
})


//Iniciando o servidor
app.listen(port, ()=>{
    console.log('Servidor online')
})

