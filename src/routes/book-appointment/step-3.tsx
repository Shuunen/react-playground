import { Button } from '@/components/atoms/button'
import { useBookAppointmentStore } from '@/utils/book-appointment.store'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeftIcon, Calendar1Icon } from 'lucide-react'

function SummaryPage() {
  const { data, setCurrentStep } = useBookAppointmentStore()
  // eslint-disable-next-line no-magic-numbers
  setCurrentStep(2)

  return (
    <div className="flex flex-col gap-2">
      <h3 className="col-span-2 font-bold text-xl">Base data</h3>
      {Object.entries(data.baseData).map(([key, value]) => (
        <div className="grid grid-cols-2" key={key}>
          <div className="text-gray-500">{key}</div>
          <div>{value}</div>
        </div>
      ))}

      <h3 className="col-span-2 font-bold text-xl">Complementary data</h3>
      {Object.entries(data.complementaryData).map(([key, value]) => (
        <div className="grid grid-cols-2" key={key}>
          <div className="text-gray-500">{key}</div>
          <div>{value}</div>
        </div>
      ))}

      <div className="flex gap-18 mt-6">
        <Link to={`/book-appointment/${data.baseData.type}/step-2`}>
          <Button type="button" variant="link">
            <ArrowLeftIcon /> Back
          </Button>
        </Link>
        <Button>
          Book that appointment <Calendar1Icon />
        </Button>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/book-appointment/step-3')({
  component: SummaryPage,
})
