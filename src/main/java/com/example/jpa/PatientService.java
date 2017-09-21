package com.example.jpa;

import com.example.model.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class PatientService implements GenericService<Patient, Long> {

    private final PatientRepository patientRepository;

    public PatientService(final PatientRepository patientRepository) {

        this.patientRepository=patientRepository;
    }

    @Override
    public Long getId(Patient entity) {
        return entity.getId();
    }

    @Override
    public CrudRepository<Patient, Long> getRepository() {
        return this.patientRepository;
    }

    @Override
    public Patient save(Patient entity) {
        return GenericService.super.save(entity);
    }
}
