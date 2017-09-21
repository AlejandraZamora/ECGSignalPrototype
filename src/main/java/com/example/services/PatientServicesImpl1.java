package  com.example.services;
import com.example.model.ECG;
import com.example.model.Patient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class PatientServicesImpl1 implements PatientServices{

    List<Patient> patientList=new ArrayList<>();
    
    

    @Override
    public void savePatient(Patient p) {
        patientList.add(p);
    }

    @Override
    public List<Patient> getPatients() {
        return patientList;
    }

    @Override
    public void updatePatient(Patient p) {
    	for (int i = 0; i < patientList.size(); i++) {
			if(p.getId().equals(patientList.get(i).getId())){
    	                patientList.set(i, p);
			}
		}
    }


    @Override
    public Patient getPatient(Long pId) {
        Patient ans=null;
        for (Patient pe :
                patientList) {
            if(pe.getId().equals(pId)){
                ans=pe;
                break;
            }
        }
        return ans;
    }

    @Override
    public ECG getECGSignal() {
        return new ECG();
    }
}
