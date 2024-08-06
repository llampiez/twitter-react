import TwitterFollowCard from './TwitterFollowCard'
import './App.css'

const users = [
  {
    name: 'Luis',
    tag: '@luistapls',
    imgUrl: 'https://pbs.twimg.com/profile_images/1604335186967142404/7-_KbgG5_400x400.jpg',
    isFollowing: true
  },
  {
    name: 'Alenel☀️',
    tag: '@alenelkholin',
    imgUrl: 'https://pbs.twimg.com/profile_images/1578318932611678208/SiTfQVYK_400x400.jpg',
    isFollowing: false
  },
  {
    name: '𝒗𝒂𝒎𝒑𝒊𝒓𝒆𝒂𝒓𝒕𝒔🧛🏻‍♀️',
    tag: '@vampirearts',
    imgUrl: 'https://pbs.twimg.com/profile_images/1678951278813011970/58oLuRQk_400x400.jpg',
    isFollowing: false
  }
]

const App = () => {
  return (
    <div className='twitter-card'>
      <div className='twitter-card__title'>
        <h2>A quién seguir</h2>
      </div>
      <div>
        <TwitterFollowCard user={users[0]}/>
        <TwitterFollowCard user={users[1]}/>
        <TwitterFollowCard user={users[2]}/>
      </div>
      <a href='' className='twitter-card__more'>Mostrar más</a>
    </div>
  )
}

export default App