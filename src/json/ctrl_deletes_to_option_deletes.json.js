// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Exchange control + deletes with option + deletes (forward and backward)',
        rules: [
          {
            description: 'Exchange control + backward delete with option + backward delete',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'delete_or_backspace',
                  modifiers: { mandatory: ['control'], optional: ['any'] },
                },
                to: [{ key_code: 'delete_or_backspace', modifiers: ['option'] }],
              },
            ],
          },
          {
            description: 'Exchange control + forward delete with option + forward delete',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'delete_forward',
                  modifiers: { mandatory: ['control'], optional: ['any'] },
                },
                to: [{ key_code: 'delete_forward', modifiers: ['option'] }],
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
