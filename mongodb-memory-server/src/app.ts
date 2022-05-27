import {MongoMemoryReplSet} from 'mongodb-memory-server';

const mongoMemoryServerReplicaSet = new MongoMemoryReplSet({
  instanceOpts: [
    {
      port: 27030,
      dbPath: './data/db',
    },
  ],
  replSet: {
    name:'droprs',
    dbName: 'droprs',
  }
})

mongoMemoryServerReplicaSet.addListener('connect', () => {
  console.log('MongoDB connected');
})

mongoMemoryServerReplicaSet.start().then(()=>{
  console.log('MongoDB started')
})

console.log('mongoMemoryServerReplicaSet',mongoMemoryServerReplicaSet.getUri())
