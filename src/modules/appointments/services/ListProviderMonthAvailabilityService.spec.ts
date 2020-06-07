import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 8, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 9, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 10, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 11, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 12, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 13, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 14, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 15, 0, 0),
      provider_id: '123',
    });
    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 16, 0, 0),
      provider_id: '123',
    });
    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 8, 17, 0, 0),
      provider_id: '123',
    });

    await fakeAppointmentsRepository.create({
      date: new Date(2020, 5, 9, 13, 0, 0),
      provider_id: '123',
    });

    const availability = await listProviderMonthAvailability.execute({
      month: 6,
      year: 2020,
      provider_id: '123',
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 7, available: true },
        { day: 8, available: false },
        { day: 9, available: true },
      ]),
    );
  });
});
