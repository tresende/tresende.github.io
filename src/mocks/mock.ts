interface Comment {
  user: string
  photo: string
  text: string
  score: number
  date: Date
  id: number
}

interface CompanyReview {
  company: string
  location: string
  comments: Comment[]
}

const data = {
  company: 'BSB Coworking',
  location: 'Brasília/DF',
  comments: [
    {
      id: 1,
      score: 1,
      date: new Date('2021-05-18'),
      photo: 'https://d3p07km83uit4h.cloudfront.net/portal/img/profile/avatar-blank.png?v=1051',
      user: 'Roberta Macedo',
      text: 'Escolhi o BSB Coworking pela proximidade de casa e principalmente pelo selo "Escritório Seguro" oferecido pela plataforma, mas infelizmente a regra de uso de máscara de proteção não se aplicou à nenhuma pessoa presente no local. A confirmação da não obrigatoriedade do uso me foi confirmada pela recepcionista e portanto deixei o local com menos de 1 hora de uso. Pelo pouco tempo de permanência não tenho muito embasamento para avaliar o local e infraestrutura, mas em relação à segurança contra Covid, minha nota seria -1 se houvesse.'
    },
    {
      id: 2,
      score: 5,
      date: new Date('2019-06-08'),
      photo: 'https://d3p07km83uit4h.cloudfront.net/portal/img/profile/avatar-blank.png?v=1051',
      user: 'Emanuella Correia',
      text: 'Excelente atendimento na recepção, internet rapidíssima, instalações limpas e confortáveis. As pessoas conversavam um pouco alto nos espaços públicos mas isso não atrapalhou meu trabalho.'
    },
    {
      id: 3,
      score: 5,
      date: new Date('2019-07-18'),
      photo: 'https://d1y4va1nna2r1p.cloudfront.net/users/profile_60176.jpeg?v=1615940104379',
      user: 'Alexandre Caseira',
      text: 'Espaço pequeno e agradável. Time simpático e solícito. Próximo do aeroporto, o que facilitou muito a minha visita. Um Uber de 10 minutos e 12 reais me deixou na porta do embarque.'
    },
    {
      id: 4,
      score: 5,
      date: new Date('2019-04-20'),
      photo: 'https://d1y4va1nna2r1p.cloudfront.net/users/profile_59647.jpeg?v=1555328709834',
      user: 'Tamara Penha',
      text: 'Lugar aconchegante, é como estar em casa. Atendimento fraterno e local com fácil interação entre pessoas que compartilham a mesa de trabalho livre. É um espaço menor de coworking mas muito bem planejado e organizado. Fácil acesso e uma ótima localização por estar frente ao setor de hospitais e em uma das principais avenidas do plano piloto. Experiência muito boa e confortável.'
    },
    {
      id: 5,
      score: 5,
      date: new Date('2019-01-15'),
      photo: 'https://d1y4va1nna2r1p.cloudfront.net/users/profile_17900.jpeg?v=1476479710853',
      user: 'Raúl Ponce',
      text: 'foi uma experiencia legal!'
    }
  ]
} as CompanyReview

export default data
