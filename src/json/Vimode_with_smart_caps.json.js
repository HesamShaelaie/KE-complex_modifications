// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Vimode with smart caps',
        maintainers: ['Lance1o7'],
        rules: [
          {
            description: 'CAPSLOCK + hjkl to arrow keys (Post ESCAPE if press CAPSLOCK alone)',
            manipulators: [
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'j',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'down_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'k',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'up_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'h',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'left_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'l',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'right_arrow',
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'caps_lock',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'caps_lock pressed',
                      value: 1,
                    },
                  },
                ],
                to_after_key_up: [
                  {
                    set_variable: {
                      name: 'caps_lock pressed',
                      value: 0,
                    },
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'escape',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Post CAPSLOCK if press ESCAPE alone',
            manipulators: [
              {
                from: {
                  key_code: 'escape',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'escape pressed',
                      value: 1,
                    },
                  },
                ],
                to_after_key_up: [
                  {
                    set_variable: {
                      name: 'escape pressed',
                      value: 0,
                    },
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'caps_lock',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Change left_shift + Command_L to escape only if pressed at the same time.',
            manipulators: [
              {
                from: {
                  key_code: 'left_command',
                  modifiers: {
                    mandatory: ['left_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'escape',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'left_command',
                  },
                ],
                type: 'basic',
              },
            ],
          },
          {
            description: 'Post COMMAND + A/C/V/X/Z to, when CAPSLOCK + A/C/V/X/Z is pressed',
            manipulators: [
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'a',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'a',
                    modifiers: ['left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'c',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'c',
                    modifiers: ['left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'v',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'v',
                    modifiers: ['left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'w',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'w',
                    modifiers: ['left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'x',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'x',
                    modifiers: ['left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                conditions: [
                  {
                    name: 'caps_lock pressed',
                    type: 'variable_if',
                    value: 1,
                  },
                ],
                from: {
                  key_code: 'z',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'z',
                    modifiers: ['left_command'],
                  },
                ],
                type: 'basic',
              },
              {
                from: {
                  key_code: 'caps_lock',
                  modifiers: {
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    set_variable: {
                      name: 'caps_lock pressed',
                      value: 1,
                    },
                  },
                ],
                to_after_key_up: [
                  {
                    set_variable: {
                      name: 'caps_lock pressed',
                      value: 0,
                    },
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'escape',
                  },
                ],
                type: 'basic',
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
