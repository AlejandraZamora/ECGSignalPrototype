package com.example.jpa;

import com.example.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;


@Transactional
public interface PatientRepository extends JpaRepository<Patient, Long>  {
}

