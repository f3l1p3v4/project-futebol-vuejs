export default {
    state: {
        news: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt praesentium. Nisi asperiores quas cumque iusto ex saepe dolorum iste. Officia dolore quisquam perferendis exercitationem ipsum vero nemo fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia tenetur maxime perferendis minima natus, tempore possimus iste architecto modi, deserunt voluptatibus perspiciatis sit accusamus explicabo expedita reiciendis dicta eaque.',
            date: '2020-01-01',
            img: 'news1.jpg',
            imgInfo: 'Notícia 1'
        },
        {
            id: 2,
            title: 'Jogo de quarta-feira termina empatada',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt praesentium. Nisi asperiores quas cumque iusto ex saepe dolorum iste. Officia dolore quisquam perferendis exercitationem ipsum vero nemo fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia tenetur maxime perferendis minima natus, tempore possimus iste architecto modi, deserunt voluptatibus perspiciatis sit accusamus explicabo expedita reiciendis dicta eaque.',
            date: '2020-01-07',
            img: 'news2.jpg',
            imgInfo: 'Notícia 2'
        },
        {
            id: 3,
            title: 'A inauguração do novo estádio será na semana que vem',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt praesentium. Nisi asperiores quas cumque iusto ex saepe dolorum iste. Officia dolore quisquam perferendis exercitationem ipsum vero nemo fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia tenetur maxime perferendis minima natus, tempore possimus iste architecto modi, deserunt voluptatibus perspiciatis sit accusamus explicabo expedita reiciendis dicta eaque.',
            date: '2020-01-20',
            img: 'news3.jpg',
            imgInfo: 'Notícia 3'
        }
        ]
    },
    getters: {
        getNews(state) {
            return state.news
        }, getNewFromId: state => id => {
            
            let notice = state.news.find(item => {
                return (item.id == id)
            });

            return notice;
        }
    }
}