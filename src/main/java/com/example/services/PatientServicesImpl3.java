/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.ECGSignalReader.ECGSignalReader;
import com.example.jpa.GenericService;
import com.example.model.ECG;
import com.example.model.Patient;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Andrés Felipe
 */
@Service
public class PatientServicesImpl3 implements PatientServices{
    @Autowired
    private GenericService ps;
    
    @Autowired
    private ECGSignalReader ECGSignalReader;
    
    public PatientServicesImpl3(final GenericService gs){
        this.ps=gs;
    }

    @Override
    public void savePatient(Patient p) {
        ps.save(p);
    }

    @Override
    public List<Patient> getPatients() {
	ArrayList<Patient> ans =new ArrayList<Patient>();
	for (Object o : ps.findAll()) {
	ans.add((Patient) o);
	}
	return ans;
    }

    @Override
    public void updatePatient(Patient p) {
    	ps.update(p);
    }


    @Override
    public Patient getPatient(Long pId) {
        return (Patient) ps.get(pId);
    }
    
    @Override
    public ECG getECGSignal() {
        return ECGSignalReader.getSignal();
    }
}
