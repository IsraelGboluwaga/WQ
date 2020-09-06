import { Document, Model, model, Schema } from 'mongoose'

interface IQueue extends Document {
  message: string
  awaitingConfirmation?: boolean
  unconfirmedAfterFetch?: boolean
  updatedAt?: any
}
interface IQueueModel extends Model<IQueue> {}

const queueSchema = new Schema(
  {
    message: { type: String },
    awaitingConfirmation: { type: Boolean, default: false },
    unconfirmedAfterFetch: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Queue = model<IQueue, IQueueModel>('Queue', queueSchema)

export { Queue, IQueue }
