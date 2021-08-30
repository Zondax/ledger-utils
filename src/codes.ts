interface Code {
  code: string
  description: string
  isOk?: true
}

interface GetCodeDescriptionResult {
  description: string
  isOk: boolean
}

const codes: Readonly<Code[]> = [
  {
    code: '0x6',
    description: 'Class not supported.',
  },
  {
    code: '0x61—',
    description: 'Response bytes still available',
  },
  {
    code: '0x61XX',
    description: 'Command successfully executed; ‘XX’ bytes of data are available and can be requested using GET RESPONSE.',
  },
  {
    code: '0x62—',
    description: 'State of non-volatile memory unchanged',
  },
  {
    code: '0x6200',
    description: 'No information given (NV-Ram not changed)',
  },
  {
    code: '0x6201',
    description: 'NV-Ram not changed 1.',
  },
  {
    code: '0x6281',
    description: 'Part of returned data may be corrupted',
  },
  {
    code: '0x6282',
    description: 'End of file/record reached before reading Le bytes',
  },
  {
    code: '0x6283',
    description: 'Selected file invalidated',
  },
  {
    code: '0x6284',
    description: 'Selected file is not valid. FCI not formated according to ISO',
  },
  {
    code: '0x6285',
    description: 'No input data available from a sensor on the card. No Purse Engine enslaved for R3bc',
  },
  {
    code: '0x62A2',
    description: 'Wrong R-MAC',
  },
  {
    code: '0x62A4',
    description: 'Card locked (during reset( ))',
  },
  {
    code: '0x62CX',
    description: 'Counter with value x (command dependent)',
  },
  {
    code: '0x62F1',
    description: 'Wrong C-MAC',
  },
  {
    code: '0x62F3',
    description: 'Internal reset',
  },
  {
    code: '0x62F5',
    description: 'Default agent locked',
  },
  {
    code: '0x62F7',
    description: 'Cardholder locked',
  },
  {
    code: '0x62F8',
    description: 'Basement is current agent',
  },
  {
    code: '0x62F9',
    description: 'CALC Key Set not unblocked',
  },
  {
    code: '0x62FX',
    description: '–',
  },
  {
    code: '0x62XX',
    description: 'RFU',
  },
  {
    code: '0x63—',
    description: 'State of non-volatile memory changed',
  },
  {
    code: '0x6300',
    description: 'No information given (NV-Ram changed)',
  },
  {
    code: '0x6381',
    description: 'File filled up by the last write. Loading/updating is not allowed.',
  },
  {
    code: '0x6382',
    description: 'Card key not supported.',
  },
  {
    code: '0x6383',
    description: 'Reader key not supported.',
  },
  {
    code: '0x6384',
    description: 'Plaintext transmission not supported.',
  },
  {
    code: '0x6385',
    description: 'Secured transmission not supported.',
  },
  {
    code: '0x6386',
    description: 'Volatile memory is not available.',
  },
  {
    code: '0x6387',
    description: 'Non-volatile memory is not available.',
  },
  {
    code: '0x6388',
    description: 'Key number not valid.',
  },
  {
    code: '0x6389',
    description: 'Key length is not correct.',
  },
  {
    code: '0x63C0',
    description: 'Verify fail, no try left.',
  },
  {
    code: '0x63C1',
    description: 'Verify fail, 1 try left.',
  },
  {
    code: '0x63C2',
    description: 'Verify fail, 2 tries left.',
  },
  {
    code: '0x63C3',
    description: 'Verify fail, 3 tries left.',
  },
  {
    code: '0x63CX',
    description: 'The counter has reached the value ‘x’ (0 = x = 15) (command dependent).',
  },
  {
    code: '0x63F1',
    description: 'More data expected.',
  },
  {
    code: '0x63F2',
    description: 'More data expected and proactive command pending.',
  },
  {
    code: '0x63FX',
    description: '–',
  },
  {
    code: '0x63XX',
    description: 'RFU',
  },
  {
    code: '0x64—',
    description: 'State of non-volatile memory unchanged',
  },
  {
    code: '0x6400',
    description: 'No information given (NV-Ram not changed)',
  },
  {
    code: '0x6401',
    description: 'Command timeout. Immediate response required by the card.',
  },
  {
    code: '0x64XX',
    description: 'RFU',
  },
  {
    code: '0x65—',
    description: 'State of non-volatile memory changed',
  },
  {
    code: '0x6500',
    description: 'No information given',
  },
  {
    code: '0x6501',
    description:
      'Write error. Memory failure. There have been problems in writing or reading the EEPROM. Other hardware problems may also bring this error.',
  },
  {
    code: '0x6581',
    description: 'Memory failure',
  },
  {
    code: '0x65FX',
    description: '–',
  },
  {
    code: '0x65XX',
    description: 'RFU',
  },
  {
    code: '0x66—',
    description: '',
  },
  {
    code: '0x6600',
    description: 'Error while receiving (timeout)',
  },
  {
    code: '0x6601',
    description: 'Error while receiving (character parity error)',
  },
  {
    code: '0x6602',
    description: 'Wrong checksum',
  },
  {
    code: '0x6603',
    description: 'The current DF file without FCI',
  },
  {
    code: '0x6604',
    description: 'No SF or KF under the current DF',
  },
  {
    code: '0x6669',
    description: 'Incorrect Encryption/Decryption Padding',
  },
  {
    code: '0x66XX',
    description: '–',
  },
  {
    code: '0x67—',
    description: '',
  },
  {
    code: '0x6700',
    description: 'Wrong length',
  },
  {
    code: '0x67XX',
    description: 'length incorrect (procedure)(ISO 7816-3)',
  },
  {
    code: '0x68—',
    description: 'Functions in CLA not supported',
  },
  {
    code: '0x6800',
    description: 'No information given (The request function is not supported by the card)',
  },
  {
    code: '0x6881',
    description: 'Logical channel not supported',
  },
  {
    code: '0x6882',
    description: 'Secure messaging not supported',
  },
  {
    code: '0x6883',
    description: 'Last command of the chain expected',
  },
  {
    code: '0x6884',
    description: 'Command chaining not supported',
  },
  {
    code: '0x68FX',
    description: '–',
  },
  {
    code: '0x68XX',
    description: 'RFU',
  },
  {
    code: '0x69—',
    description: 'Command not allowed',
  },
  {
    code: '0x6900',
    description: 'No information given (Command not allowed)',
  },
  {
    code: '0x6901',
    description: 'Command not accepted (inactive state)',
  },
  {
    code: '0x6981',
    description: 'Command incompatible with file structure',
  },
  {
    code: '0x6982',
    description: 'Security condition not satisfied.',
  },
  {
    code: '0x6983',
    description: 'Authentication method blocked',
  },
  {
    code: '0x6984',
    description: 'Referenced data reversibly blocked (invalidated)',
  },
  {
    code: '0x6985',
    description: 'Conditions of use not satisfied.',
  },
  {
    code: '0x6986',
    description: 'Command not allowed (no current EF)',
  },
  {
    code: '0x6987',
    description: 'Expected secure messaging (SM) object missing',
  },
  {
    code: '0x6988',
    description: 'Incorrect secure messaging (SM) data object',
  },
  {
    code: '0x698D',
    description: 'Reserved',
  },
  {
    code: '0x6996',
    description: 'Data must be updated again',
  },
  {
    code: '0x69E1',
    description: 'POL1 of the currently Enabled Profile prevents this action.',
  },
  {
    code: '0x69F0',
    description: 'Permission Denied',
  },
  {
    code: '0x69F1',
    description: 'Permission Denied – Missing Privilege',
  },
  {
    code: '0x69FX',
    description: '–',
  },
  {
    code: '0x69XX',
    description: 'RFU',
  },
  {
    code: '0x6A—',
    description: 'Wrong parameter(s) P1-P2',
  },
  {
    code: '0x6A00',
    description: 'No information given (Bytes P1 and/or P2 are incorrect)',
  },
  {
    code: '0x6A80',
    description: 'The parameters in the data field are incorrect.',
  },
  {
    code: '0x6A81',
    description: 'Function not supported',
  },
  {
    code: '0x6A82',
    description: 'File not found',
  },
  {
    code: '0x6A83',
    description: 'Record not found',
  },
  {
    code: '0x6A84',
    description: 'There is insufficient memory space in record or file',
  },
  {
    code: '0x6A85',
    description: 'Lc inconsistent with TLV structure',
  },
  {
    code: '0x6A86',
    description: 'Incorrect P1 or P2 parameter.',
  },
  {
    code: '0x6A87',
    description: 'Lc inconsistent with P1-P2',
  },
  {
    code: '0x6A88',
    description: 'Referenced data not found',
  },
  {
    code: '0x6A89',
    description: 'File already exists',
  },
  {
    code: '0x6A8A',
    description: 'DF name already exists.',
  },
  {
    code: '0x6AF0',
    description: 'Wrong parameter value',
  },
  {
    code: '0x6AFX',
    description: '–',
  },
  {
    code: '0x6AXX',
    description: 'RFU',
  },
  {
    code: '0x6B—',
    description: '',
  },
  {
    code: '0x6B00',
    description: 'Wrong parameter(s) P1-P2',
  },
  {
    code: '0x6BXX',
    description: 'Reference incorrect (procedure byte), (ISO 7816-3)',
  },
  {
    code: '0x6C—',
    description: 'Wrong length Le',
  },
  {
    code: '0x6C00',
    description: 'Incorrect P3 length.',
  },
  {
    code: '0x6CXX',
    description: 'Bad length value in Le; ‘xx’ is the correct exact Le',
  },
  {
    code: '0x6D—',
    description: '',
  },
  {
    code: '0x6D00',
    description: 'Instruction code not supported or invalid',
  },
  {
    code: '0x6DXX',
    description: 'Instruction code not programmed or invalid (procedure byte), (ISO 7816-3)',
  },
  {
    code: '0x6E—',
    description: '',
  },
  {
    code: '0x6E00',
    description: 'Class not supported',
  },
  {
    code: '0x6EXX',
    description: 'Instruction class not supported (procedure byte), (ISO 7816-3)',
  },
  {
    code: '0x6F—',
    description: 'Internal exception',
  },
  {
    code: '0x6F00',
    description: 'Command aborted – more exact diagnosis not possible (e.g., operating system error).',
  },
  {
    code: '0x6FFF',
    description: 'Card dead (overuse, …)',
  },
  {
    code: '0x6FXX',
    description: 'No precise diagnosis (procedure byte), (ISO 7816-3)',
  },
  {
    code: '0x9-—',
    description: '',
  },
  {
    code: '0x9000',
    description: 'Command successfully executed (OK).',
    isOk: true,
  },
  {
    code: '0x9004',
    description: 'PIN not succesfully verified, 3 or more PIN tries left',
  },
  {
    code: '0x9008',
    description: 'Key/file not found',
  },
  {
    code: '0x9080',
    description: 'Unblock Try Counter has reached zero',
  },
  {
    code: '0x9100',
    description: 'OK',
  },
  {
    code: '0x9101',
    description: 'States.activity, States.lock Status or States.lockable has wrong value',
  },
  {
    code: '0x9102',
    description: 'Transaction number reached its limit',
  },
  {
    code: '0x910C',
    description: 'No changes',
  },
  {
    code: '0x910E',
    description: 'Insufficient NV-Memory to complete command',
  },
  {
    code: '0x911C',
    description: 'Command code not supported',
  },
  {
    code: '0x911E',
    description: 'CRC or MAC does not match data',
  },
  {
    code: '0x9140',
    description: 'Invalid key number specified',
  },
  {
    code: '0x917E',
    description: 'Length of command string invalid',
  },
  {
    code: '0x919D',
    description: 'Not allow the requested command',
  },
  {
    code: '0x919E',
    description: 'Value of the parameter invalid',
  },
  {
    code: '0x91A0',
    description: 'Requested AID not present on PICC',
  },
  {
    code: '0x91A1',
    description: 'Unrecoverable error within application',
  },
  {
    code: '0x91AE',
    description: 'Authentication status does not allow the requested command',
  },
  {
    code: '0x91AF',
    description: 'Additional data frame is expected to be sent',
  },
  {
    code: '0x91BE',
    description: 'Out of boundary',
  },
  {
    code: '0x91C1',
    description: 'Unrecoverable error within PICC',
  },
  {
    code: '0x91CA',
    description: 'Previous Command was not fully completed',
  },
  {
    code: '0x91CD',
    description: 'PICC was disabled by an unrecoverable error',
  },
  {
    code: '0x91CE',
    description: 'Number of Applications limited to 28',
  },
  {
    code: '0x91DE',
    description: 'File or application already exists',
  },
  {
    code: '0x91EE',
    description: 'Could not complete NV-write operation due to loss of power',
  },
  {
    code: '0x91F0',
    description: 'Specified file number does not exist',
  },
  {
    code: '0x91F1',
    description: 'Unrecoverable error within file',
  },
  {
    code: '0x920x',
    description: 'Writing to EEPROM successful after ‘x’ attempts.',
  },
  {
    code: '0x9210',
    description: 'Insufficient memory. No more storage available.',
  },
  {
    code: '0x9240',
    description: 'Writing to EEPROM not successful.',
  },
  {
    code: '0x9301',
    description: 'Integrity error',
  },
  {
    code: '0x9302',
    description: 'Candidate S2 invalid',
  },
  {
    code: '0x9303',
    description: 'Application is permanently locked',
  },
  {
    code: '0x9400',
    description: 'No EF selected.',
  },
  {
    code: '0x9401',
    description: 'Candidate currency code does not match purse currency',
  },
  {
    code: '0x9402',
    description: 'Candidate amount too high',
  },
  {
    code: '0x9402',
    description: 'Address range exceeded.',
  },
  {
    code: '0x9403',
    description: 'Candidate amount too low',
  },
  {
    code: '0x9404',
    description: 'FID not found, record not found or comparison pattern not found.',
  },
  {
    code: '0x9405',
    description: 'Problems in the data field',
  },
  {
    code: '0x9406',
    description: 'Required MAC unavailable',
  },
  {
    code: '0x9407',
    description: 'Bad currency : purse engine has no slot with R3bc currency',
  },
  {
    code: '0x9408',
    description: 'R3bc currency not supported in purse engine',
  },
  {
    code: '0x9408',
    description: 'Selected file type does not match command.',
  },
  {
    code: '0x9580',
    description: 'Bad sequence',
  },
  {
    code: '0x9681',
    description: 'Slave not found',
  },
  {
    code: '0x9700',
    description: 'PIN blocked and Unblock Try Counter is 1 or 2',
  },
  {
    code: '0x9702',
    description: 'Main keys are blocked',
  },
  {
    code: '0x9704',
    description: 'PIN not succesfully verified, 3 or more PIN tries left',
  },
  {
    code: '0x9784',
    description: 'Base key',
  },
  {
    code: '0x9785',
    description: 'Limit exceeded – C-MAC key',
  },
  {
    code: '0x9786',
    description: 'SM error – Limit exceeded – R-MAC key',
  },
  {
    code: '0x9787',
    description: 'Limit exceeded – sequence counter',
  },
  {
    code: '0x9788',
    description: 'Limit exceeded – R-MAC length',
  },
  {
    code: '0x9789',
    description: 'Service not available',
  },
  {
    code: '0x9802',
    description: 'No PIN defined.',
  },
  {
    code: '0x9804',
    description: 'Access conditions not satisfied, authentication failed.',
  },
  {
    code: '0x9835',
    description: 'ASK RANDOM or GIVE RANDOM not executed.',
  },
  {
    code: '0x9840',
    description: 'PIN verification not successful.',
  },
  {
    code: '0x9850',
    description: 'INCREASE or DECREASE could not be executed because a limit has been reached.',
  },
  {
    code: '0x9862',
    description: 'Authentication Error, application specific (incorrect MAC)',
  },
  {
    code: '0x9900',
    description: '1 PIN try left',
  },
  {
    code: '0x9904',
    description: 'PIN not succesfully verified, 1 PIN try left',
  },
  {
    code: '0x9985',
    description: 'Wrong status – Cardholder lock',
  },
  {
    code: '0x9986',
    description: 'Missing privilege',
  },
  {
    code: '0x9987',
    description: 'PIN is not installed',
  },
  {
    code: '0x9988',
    description: 'Wrong status – R-MAC state',
  },
  {
    code: '0x9A00',
    description: '2 PIN try left',
  },
  {
    code: '0x9A04',
    description: 'PIN not succesfully verified, 2 PIN try left',
  },
  {
    code: '0x9A71',
    description: 'Wrong parameter value – Double agent AID',
  },
  {
    code: '0x9A72',
    description: 'Wrong parameter value – Double agent Type',
  },
  {
    code: '0x9D05',
    description: 'Incorrect certificate type',
  },
  {
    code: '0x9D07',
    description: 'Incorrect session data size',
  },
  {
    code: '0x9D08',
    description: 'Incorrect DIR file record size',
  },
  {
    code: '0x9D09',
    description: 'Incorrect FCI record size',
  },
  {
    code: '0x9D0A',
    description: 'Incorrect code size',
  },
  {
    code: '0x9D10',
    description: 'Insufficient memory to load application',
  },
  {
    code: '0x9D11',
    description: 'Invalid AID',
  },
  {
    code: '0x9D12',
    description: 'Duplicate AID',
  },
  {
    code: '0x9D13',
    description: 'Application previously loaded',
  },
  {
    code: '0x9D14',
    description: 'Application history list full',
  },
  {
    code: '0x9D15',
    description: 'Application not open',
  },
  {
    code: '0x9D17',
    description: 'Invalid offset',
  },
  {
    code: '0x9D18',
    description: 'Application already loaded',
  },
  {
    code: '0x9D19',
    description: 'Invalid certificate',
  },
  {
    code: '0x9D1A',
    description: 'Invalid signature',
  },
  {
    code: '0x9D1B',
    description: 'Invalid KTU',
  },
  {
    code: '0x9D1D',
    description: 'MSM controls not set',
  },
  {
    code: '0x9D1E',
    description: 'Application signature does not exist',
  },
  {
    code: '0x9D1F',
    description: 'KTU does not exist',
  },
  {
    code: '0x9D20',
    description: 'Application not loaded',
  },
  {
    code: '0x9D21',
    description: 'Invalid Open command data length',
  },
  {
    code: '0x9D30',
    description: 'Check data parameter is incorrect (invalid start address)',
  },
  {
    code: '0x9D31',
    description: 'Check data parameter is incorrect (invalid length)',
  },
  {
    code: '0x9D32',
    description: 'Check data parameter is incorrect (illegal memory check area)',
  },
  {
    code: '0x9D40',
    description: 'Invalid MSM Controls ciphertext',
  },
  {
    code: '0x9D41',
    description: 'MSM controls already set',
  },
  {
    code: '0x9D42',
    description: 'Set MSM Controls data length less than 2 bytes',
  },
  {
    code: '0x9D43',
    description: 'Invalid MSM Controls data length',
  },
  {
    code: '0x9D44',
    description: 'Excess MSM Controls ciphertext',
  },
  {
    code: '0x9D45',
    description: 'Verification of MSM Controls data failed',
  },
  {
    code: '0x9D50',
    description: 'Invalid MCD Issuer production ID',
  },
  {
    code: '0x9D51',
    description: 'Invalid MCD Issuer ID',
  },
  {
    code: '0x9D52',
    description: 'Invalid set MSM controls data date',
  },
  {
    code: '0x9D53',
    description: 'Invalid MCD number',
  },
  {
    code: '0x9D54',
    description: 'Reserved field error',
  },
  {
    code: '0x9D55',
    description: 'Reserved field error',
  },
  {
    code: '0x9D56',
    description: 'Reserved field error',
  },
  {
    code: '0x9D57',
    description: 'Reserved field error',
  },
  {
    code: '0x9D60',
    description: 'MAC verification failed',
  },
  {
    code: '0x9D61',
    description: 'Maximum number of unblocks reached',
  },
  {
    code: '0x9D62',
    description: 'Card was not blocked',
  },
  {
    code: '0x9D63',
    description: 'Crypto functions not available',
  },
  {
    code: '0x9D64',
    description: 'No application loaded',
  },
  {
    code: '0x9E00',
    description: 'PIN not installed',
  },
  {
    code: '0x9E04',
    description: 'PIN not succesfully verified, PIN not installed',
  },
  {
    code: '0x9F00',
    description: 'PIN blocked and Unblock Try Counter is 3',
  },
  {
    code: '0x9F04',
    description: 'PIN not succesfully verified, PIN blocked and Unblock Try Counter is 3',
  },
  {
    code: '0x9FXX',
    description: 'Command successfully executed; ‘xx’ bytes of data are available and can be requested using GET RESPONSE.',
  },
  {
    code: '0x9xXX',
    description: 'Application related status, (ISO 7816-3)',
  },
]

export const getCodeDescription = (code: number): GetCodeDescriptionResult => {
  const stringCode = `0x${code.toString(16)}`

  const found = codes.find(({ code: c }) => stringCode == c)
  if (!found) throw new Error('Code not found')

  return { description: found.description, isOk: !!found.isOk }
}
