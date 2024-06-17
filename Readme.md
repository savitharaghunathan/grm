to run code

`npm run build && npm start`

### sample output:

```
sraghuna$ npm start

> globalrequestsmanager@1.0.0 start
> node dist/index.js

'FileA' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'gnkoo7xo4qg',
        process: 'Kai'
      }
'FileJ' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'yiwkaaw3sd',
        process: 'Kantra'
      }
Process already running or waiting on file FileJ
'FileA' => FileProcess {
        state: 'none',
        controller: [object AbortController],
        hash: 'gnkoo7xo4qg',
        process: 'none'
      }
Process on file FileA stopped
'FileB' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'phb3hxwtwp',
        process: 'Kantra'
      }
'FileC' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'd3j0gw27c9k',
        process: 'Kai'
      }
Current file map: Map(4) {
  'FileA' => FileProcess {
    state: 'none',
    controller: AbortController { signal: AbortSignal { aborted: true } },
    hash: 'gnkoo7xo4qg',
    process: 'none'
  },
  'FileJ' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'yiwkaaw3sd',
    process: 'Kantra'
  },
  'FileB' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'phb3hxwtwp',
    process: 'Kantra'
  },
  'FileC' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'd3j0gw27c9k',
    process: 'Kai'
  }
}
'FileJ' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'yiwkaaw3sd',
        process: 'Kantra'
      }
Processing Kantra on file FileJ
'FileB' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'phb3hxwtwp',
        process: 'Kantra'
      }
Processing Kantra on file FileB
'FileC' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'd3j0gw27c9k',
        process: 'Kai'
      }
Processing Kai on file FileC
'FileJ' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'yiwkaaw3sd',
        process: 'none'
      }
Finished Kantra on file FileJ
'FileC' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'd3j0gw27c9k',
        process: 'none'
      }
Finished Kai on file FileC
...
...
```