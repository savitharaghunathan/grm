to run code

`npm run build && npm start`

### sample output:

```
sraghuna$ npm start

> globalrequestsmanager@1.0.0 start
> node dist/index.js

Current queue ------------: []
'FileA' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'vv1281gngdk',
        process: 'Kai'
      }
'FileJ' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'iqp2bse63y',
        process: 'Kantra'
      }
Process already running or waiting on file FileJ
'FileA' => FileProcess {
        state: 'none',
        controller: [object AbortController],
        hash: 'vv1281gngdk',
        process: 'none'
      }
Process on file FileA stopped
'FileB' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: '57iy5xn3u6o',
        process: 'Kantra'
      }
'FileC' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'fth5ze4eies',
        process: 'Kai'
      }
'FileD' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'x4qqtcorky',
        process: 'Kai'
      }
'FileE' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'xh3fm4389x8',
        process: 'Kantra'
      }
'FileF' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'tr0eht6pyho',
        process: 'Kai'
      }
'FileA' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'ut1dw5lb15',
        process: 'Kantra'
      }
'FileG' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'opqj31je4se',
        process: 'Kantra'
      }
'FileG' => FileProcess {
        state: 'none',
        controller: [object AbortController],
        hash: 'opqj31je4se',
        process: 'none'
      }
Process on file FileG stopped
'FileH' => FileProcess {
        state: 'waiting',
        controller: [object AbortController],
        hash: 'ijtqkn7j1zc',
        process: 'Kai'
      }
Current file map: Map(9) {
  'FileA' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'ut1dw5lb15',
    process: 'Kantra'
  },
  'FileJ' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'iqp2bse63y',
    process: 'Kantra'
  },
  'FileB' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: '57iy5xn3u6o',
    process: 'Kantra'
  },
  'FileC' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'fth5ze4eies',
    process: 'Kai'
  },
  'FileD' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'x4qqtcorky',
    process: 'Kai'
  },
  'FileE' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'xh3fm4389x8',
    process: 'Kantra'
  },
  'FileF' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'tr0eht6pyho',
    process: 'Kai'
  },
  'FileG' => FileProcess {
    state: 'none',
    controller: AbortController { signal: AbortSignal { aborted: true } },
    hash: 'opqj31je4se',
    process: 'none'
  },
  'FileH' => FileProcess {
    state: 'waiting',
    controller: AbortController { signal: AbortSignal { aborted: false } },
    hash: 'ijtqkn7j1zc',
    process: 'Kai'
  }
}
Current queue ------------: [
  { file: 'FileJ', action: 'Kantra' },
  { file: 'FileB', action: 'Kantra' },
  { file: 'FileC', action: 'Kai' },
  { file: 'FileD', action: 'Kai' },
  { file: 'FileE', action: 'Kantra' },
  { file: 'FileF', action: 'Kai' },
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
'FileJ' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'iqp2bse63y',
        process: 'Kantra'
      }
Starting Kantra on file FileJ
Current queue ------------: [
  { file: 'FileB', action: 'Kantra' },
  { file: 'FileC', action: 'Kai' },
  { file: 'FileD', action: 'Kai' },
  { file: 'FileE', action: 'Kantra' },
  { file: 'FileF', action: 'Kai' },
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
Finished Kantra on file FileJ
'FileJ' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'iqp2bse63y',
        process: 'none'
      }
Current queue ------------: [
  { file: 'FileB', action: 'Kantra' },
  { file: 'FileC', action: 'Kai' },
  { file: 'FileD', action: 'Kai' },
  { file: 'FileE', action: 'Kantra' },
  { file: 'FileF', action: 'Kai' },
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
'FileB' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: '57iy5xn3u6o',
        process: 'Kantra'
      }
Starting Kantra on file FileB
'FileC' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'fth5ze4eies',
        process: 'Kai'
      }
Starting Kai on file FileC
'FileD' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'x4qqtcorky',
        process: 'Kai'
      }
Starting Kai on file FileD
Current queue ------------: [
  { file: 'FileE', action: 'Kantra' },
  { file: 'FileF', action: 'Kai' },
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
Current queue ------------: [
  { file: 'FileE', action: 'Kantra' },
  { file: 'FileF', action: 'Kai' },
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
Finished Kantra on file FileB
'FileB' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: '57iy5xn3u6o',
        process: 'none'
      }
Current queue ------------: [
  { file: 'FileE', action: 'Kantra' },
  { file: 'FileF', action: 'Kai' },
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
'FileE' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'xh3fm4389x8',
        process: 'Kantra'
      }
Starting Kantra on file FileE
Finished Kai on file FileC
'FileC' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'fth5ze4eies',
        process: 'none'
      }
Current queue ------------: [
  { file: 'FileF', action: 'Kai' },
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
'FileF' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'tr0eht6pyho',
        process: 'Kai'
      }
Starting Kai on file FileF
Finished Kai on file FileD
'FileD' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'x4qqtcorky',
        process: 'none'
      }
Current queue ------------: [
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
Current queue ------------: [
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
Current queue ------------: [
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
Finished Kantra on file FileE
'FileE' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'xh3fm4389x8',
        process: 'none'
      }
Current queue ------------: [
  { file: 'FileA', action: 'Kantra' },
  { file: 'FileH', action: 'Kai' }
]
'FileA' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'ut1dw5lb15',
        process: 'Kantra'
      }
Starting Kantra on file FileA
'FileH' => FileProcess {
        state: 'in progress',
        controller: [object AbortController],
        hash: 'ijtqkn7j1zc',
        process: 'Kai'
      }
Starting Kai on file FileH
Finished Kai on file FileF
'FileF' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'tr0eht6pyho',
        process: 'none'
      }
Current queue ------------: []
Current queue ------------: []
Current queue ------------: []
Finished Kantra on file FileA
'FileA' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'ut1dw5lb15',
        process: 'none'
      }
Current queue ------------: []
Finished Kai on file FileH
'FileH' => FileProcess {
        state: 'completed',
        controller: [object AbortController],
        hash: 'ijtqkn7j1zc',
        process: 'none'
      }
Current queue ------------: []
Current queue ------------: []
Current queue ------------: []
....
....

```