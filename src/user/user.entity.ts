import { Column, Entity } from 'typeorm'

@Entity('User')
export class UserEntity extends Base {
  @Column({ unique: true })
  email: string

  @Column({ select: false })
  password: string

  @Column({ default: '' })
  name: string

  @Column({ default: false, name: 'is_verified' })
  isVerified: boolean

  @Column({ default: '' })
  subscr: string

  @Column({ default: '' })
  name: string
}
