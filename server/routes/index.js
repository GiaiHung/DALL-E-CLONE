import postRouter from './postRoutes.js'
import dalleRouter from './dalleRoutes.js'

const route = (app) => {
  app.use('/api/v1/posts', postRouter)
  app.use('/api/v1/dalle', dalleRouter)
}

export default route
