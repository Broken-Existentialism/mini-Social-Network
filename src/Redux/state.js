let posts= [
    {message:'Hi, I am post-1', likes:'20'},
    {message:'Hi, I am post-2', likes:'30'},
    {message:'Hi, I am post-3', likes:'40'},
    {message:'Hi, I am post-4', likes:'50'}
]
let dialogs = [
    {name:'Alex', id:'1' },
    {name:'Lex', id:'2'},
    {name:'John', id:'3'},
    {name:'Constantin', id:'4'},
    {name:'Fyodor', id:'5'}
]
let messages = [
    {id:'1', message:'Hi I am Component'},
    {id:'2', message:'How are you?'},
    {id:'3', message:'I like you'},
    {id:'4', message:'I like you'},
    {id:'5', message:'I like you'}
]
let sidebar = [
    {name:"Alex", city:"London"},
    {name:"Alex", city:"London"},
    {name:"Alex", city:"London"},
    {name:"Alex", city:"London"}
]
let state = {
    profilePage:{
        posts
    },
    dialogsPage: {
        dialogs,
        messages
    },
    sidebar:{
        sidebar
    }
}

export default state;