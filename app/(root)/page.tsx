"use client"
import { Modal } from '@/components/ui/modal'

export default function SetupPage() {
  return (
    <div className='p-4'>
      <Modal title='Create new product' description='This is desc' isOpen={true} onClose={() => {}}>This is content</Modal>
    </div>
  )
}
