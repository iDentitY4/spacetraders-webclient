import createGame from '~/game/game.js'

export default (ctx, inject) => {
  inject('game', createGame)
}
