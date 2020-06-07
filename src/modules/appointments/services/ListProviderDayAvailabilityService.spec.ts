import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailability: ListProviderDayAvailabilityService;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 13, 0, 0),
      provider_id: '123',
      user_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 14, 0, 0),
      provider_id: '123',
      user_id: '123',
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 8, 11).getTime();
    });

    const availability = await listProviderDayAvailability.execute({
      day: 8,
      month: 6,
      year: 2020,
      provider_id: '123',
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 11, available: false },
        { hour: 12, available: true },
        { hour: 13, available: false },
        { hour: 14, available: false },
        { hour: 15, available: true },
      ]),
    );
  });
});
