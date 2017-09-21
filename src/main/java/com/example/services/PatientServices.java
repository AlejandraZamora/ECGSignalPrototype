package  com.example.services;
import com.example.model.ECG;
import com.example.model.Patient;
import java.util.List;

public interface PatientServices {
    public void savePatient(Patient p);
    public List<Patient> getPatients();
    public void updatePatient(Patient p);
    public Patient getPatient(Long pId);
    public ECG getECGSignal();
}
