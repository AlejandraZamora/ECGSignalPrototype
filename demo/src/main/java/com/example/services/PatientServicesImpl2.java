package  com.example.services;
import com.example.model.Patient;
import org.springframework.stereotype.Service;
import com.example.jpa.GenericService;
import com.example.model.ECG;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

//@Service
public class PatientServicesImpl2 implements PatientServices{

    @Autowired
    private GenericService ps;
    
    public PatientServicesImpl2(final GenericService gs){
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
        return new ECG();
    }
}
