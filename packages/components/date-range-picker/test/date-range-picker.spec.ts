import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { useLocale } from '@puik/hooks'
import PuikDateRangePicker from '../src/date-range-picker.vue'
import DateRangeButton from '../src/date-range-button.vue'
import CalendarsContainer from '../src/calendars-container.vue'
import Calendar from '../src/calendar.vue'
import CalendarCell from '../src/calendar-cell.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

const { t } = useLocale()

describe('DateRangePicker tests', () => {
  let wrapper: VueWrapper<any>

  const findDateRangePicker = () => wrapper.find('.puik-date-range-picker')
  const findDateRangePickerComponent = () =>
    wrapper.findComponent(PuikDateRangePicker)
  const findDateRangeButton = () => wrapper.find('.puik-date-range-button')
  const findDateRangeButtonComponent = () =>
    wrapper.findComponent(DateRangeButton)
  const findAllDateRangeButtonDates = () =>
    wrapper.findAll('.puik-date-range-button__date')
  const findCalendarsContainer = () =>
    wrapper.find('.puik-date-range-picker__calendars-container')
  const findCalendarsContainerComponent = () =>
    wrapper.findComponent(CalendarsContainer)
  const findAllCalendar = () => wrapper.findAll('.puik-calendar')
  const findAllCalendarComponent = () => wrapper.findAllComponents(Calendar)
  const findAllCalendarCell = () =>
    wrapper.findAll('.puik-calendar__table__body__cell')
  const findAllCalendarCellComponent = () =>
    wrapper.findAllComponents(CalendarCell)

  const openComponent = () => findDateRangeButton().trigger('click')

  const factory = (
    template: string,
    data: Record<string, any> = () => ({}),
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount({
      components: {
        'puik-date-range-picker': PuikDateRangePicker,
      },
      template,
      data,
      ...options,
    })
  }
  it('should be a vue instance', () => {
    factory(`<puik-date-range-picker v-model="value" />`, () => ({
      value: {},
    }))
    expect(wrapper).toBeTruthy()
  })

  it('button should open the calendars container on click', async () => {
    factory(
      `<puik-date-range-picker v-model="value" printedFormat="dd/MM/yyyy"/>`,
      () => ({
        value: {},
      })
    )
    expect(findCalendarsContainer().exists()).toBeFalsy()
    await openComponent()
    expect(findCalendarsContainer().exists()).toBeTruthy()
  })

  it('button should be active then component is open', async () => {
    factory(
      `<puik-date-range-picker v-model="value" printedFormat="dd/MM/yyyy"/>`,
      () => ({
        value: {},
      })
    )
    await openComponent()
    expect(findDateRangeButton().classes()).toContain(
      'puik-date-range-button--active'
    )
  })

  it('button should be in a disabled state', async () => {
    factory(`<puik-date-range-picker v-model="value" disabled />`, () => ({
      value: {},
    }))
    await openComponent()
    expect(findCalendarsContainer().exists()).toBeFalsy()
    expect(findDateRangeButton().classes()).toContain(
      'puik-date-range-button--disabled'
    )
    expect(findDateRangeButton().isDisabled()).toBeTruthy()
  })

  it('button should be in a error state', () => {
    factory(`<puik-date-range-picker v-model="value" error />`, () => ({
      value: {},
    }))
    expect(findDateRangeButton().classes()).toContain(
      'puik-date-range-button--error'
    )
  })

  it('button should print default value if v-model is empty', () => {
    factory(`<puik-date-range-picker v-model="value" />`, () => ({
      value: {},
    }))
    expect(findAllDateRangeButtonDates().at(0).text()).toBe(
      t('puik.dates.startDate')
    )
    expect(findAllDateRangeButtonDates().at(1).text()).toBe(
      t('puik.dates.endDate')
    )
  })

  it('button should print default format', () => {
    factory(`<puik-date-range-picker v-model="value" />`, () => ({
      value: {
        startDate: '2022-08-01T00:00:00+02:00',
        endDate: '2022-09-01T00:00:00+02:00',
      },
    }))
    expect(findAllDateRangeButtonDates().at(0).text()).toBe('08-01-2022')
    expect(findAllDateRangeButtonDates().at(1).text()).toBe('09-01-2022')
  })

  it('button should print custom format', () => {
    factory(
      `<puik-date-range-picker v-model="value" printedFormat="dd/MM/yyyy"/>`,
      () => ({
        value: {
          startDate: '2022-08-01T00:00:00+02:00',
          endDate: '2022-09-01T00:00:00+02:00',
        },
      })
    )
    expect(findAllDateRangeButtonDates().at(0).text()).toBe('01/08/2022')
    expect(findAllDateRangeButtonDates().at(1).text()).toBe('01/09/2022')
  })

  it('should display 2 calendars by default', async () => {
    factory(`<puik-date-range-picker v-model="value"/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(findAllCalendar().length).toBe(2)
  })

  it("should display 3 calendars then it's set", async () => {
    factory(`<puik-date-range-picker v-model="value" columns="3"/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(findAllCalendar().length).toBe(3)
  })

  it('should not display range options by default', async () => {
    factory(`<puik-date-range-picker v-model="value"/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(wrapper.find('.puik-calendar-options-list').exists()).toBeFalsy()
  })

  it("should display range options then it's set", async () => {
    factory(`<puik-date-range-picker v-model="value" range-options/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(wrapper.find('.puik-calendar-options-list').exists()).toBeTruthy()
  })

  it('should display action bar by default', async () => {
    factory(`<puik-date-range-picker v-model="value"/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(
      wrapper.find('.puik-calendars-container__actions').exists()
    ).toBeTruthy()
  })

  it('should not display action bar if auto apply is set', async () => {
    factory(`<puik-date-range-picker v-model="value" auto-apply/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(
      wrapper.find('.puik-calendars-container__actions').exists()
    ).toBeFalsy()
  })

  it('should display change month/year only 2 boutons in first and last calendar by default (2 columns)', async () => {
    factory(`<puik-date-range-picker v-model="value"/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(
      findAllCalendar()
        .at(0)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(2)
    expect(
      findAllCalendar()
        .at(1)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(2)
  })

  it('should display change month/year only 2 boutons in first and last calendar by default (3 columns)', async () => {
    factory(`<puik-date-range-picker v-model="value" columns="3"/>`, () => ({
      value: {},
    }))
    await openComponent()
    expect(
      findAllCalendar()
        .at(0)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(2)
    expect(
      findAllCalendar()
        .at(1)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(0)
    expect(
      findAllCalendar()
        .at(2)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(2)
  })

  it('should display change month/year 4 boutons in all calendar with solo calendars set (2 columns)', async () => {
    factory(
      `<puik-date-range-picker v-model="value" solo-calendars />`,
      () => ({
        value: {},
      })
    )
    await openComponent()
    expect(
      findAllCalendar()
        .at(0)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(4)
    expect(
      findAllCalendar()
        .at(1)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(4)
  })

  it('should display change month/year only 2 boutons in first and last calendar with solo calendars set (3 columns)', async () => {
    factory(
      `<puik-date-range-picker v-model="value" columns="3" solo-calendars />`,
      () => ({
        value: {},
      })
    )
    await openComponent()
    expect(
      findAllCalendar()
        .at(0)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(2)
    expect(
      findAllCalendar()
        .at(1)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(0)
    expect(
      findAllCalendar()
        .at(2)
        .findAll('.puik-calendar__month-year-selector__button').length
    ).toBe(2)
  })

  it('should close calendars container then cancel or apply buttons are pressed', async () => {
    factory(`<puik-date-range-picker v-model="value" />`, () => ({
      value: {},
    }))
    expect(findCalendarsContainer().exists()).toBeFalsy()
    await openComponent()
    expect(findCalendarsContainer().exists()).toBeTruthy()
    await wrapper.find('.puik-button.puik-button--primary').trigger('click')
    expect(findCalendarsContainer().exists()).toBeFalsy()
    await openComponent()
    await wrapper.find('.puik-button.puik-button--text').trigger('click')
    expect(findCalendarsContainer().exists()).toBeFalsy()
  })

  it('should apply change only then apply button is pressed by default', async () => {
    factory(`<puik-date-range-picker v-model="value" />`, () => ({
      value: {
        startDate: '2022-08-01T00:00:00+02:00',
        endDate: '2022-09-01T00:00:00+02:00',
      },
    }))
    expect(findAllDateRangeButtonDates().at(0).text()).toBe('08-01-2022')
    expect(findAllDateRangeButtonDates().at(1).text()).toBe('09-01-2022')
    await openComponent()
    await findAllCalendar()
      .at(0)
      .findAll('.puik-calendar-cell-button')
      .at(1)
      .trigger('click')
    await findAllCalendar()
      .at(1)
      .findAll('.puik-calendar-cell-button')
      .at(1)
      .trigger('click')
    await wrapper.find('.puik-button.puik-button--primary').trigger('click')
    expect(findDateRangePickerComponent().emitted()).toEqual({
      'update:modelValue': [
        [
          {
            startDate: '2022-08-02T00:00:00+02:00',
            endDate: '2022-09-02T00:00:00+02:00',
          },
        ],
      ],
    })
    expect(findAllDateRangeButtonDates().at(0).text()).toBe('08-02-2022')
    expect(findAllDateRangeButtonDates().at(1).text()).toBe('09-02-2022')
  })
})
