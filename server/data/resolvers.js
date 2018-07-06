
import { getSongInfo } from './connectors';

const resolvers = {

  Query: {
    song(_, args) {
      return getSongInfo(args)
      }
    }
  }