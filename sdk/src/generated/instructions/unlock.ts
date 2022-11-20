/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category Unlock
 * @category generated
 */
export const unlockStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'UnlockInstructionArgs'
)
/**
 * Accounts required by the _unlock_ instruction
 *
 * @property [] policy
 * @property [] mint
 * @property [_writable_] mintState
 * @property [**signer**] from
 * @property [] instructions
 * @category Instructions
 * @category Unlock
 * @category generated
 */
export type UnlockInstructionAccounts = {
  policy: web3.PublicKey
  mint: web3.PublicKey
  mintState: web3.PublicKey
  from: web3.PublicKey
  instructions: web3.PublicKey
}

export const unlockInstructionDiscriminator = [
  101, 155, 40, 21, 158, 189, 56, 203,
]

/**
 * Creates a _Unlock_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Unlock
 * @category generated
 */
export function createUnlockInstruction(
  accounts: UnlockInstructionAccounts,
  programId = new web3.PublicKey('mtokYxNhZEihbDq3r6LX22pLKnpuQvXV5kwhgCDCWw4')
) {
  const [data] = unlockStruct.serialize({
    instructionDiscriminator: unlockInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.policy,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mintState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.from,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.instructions,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}