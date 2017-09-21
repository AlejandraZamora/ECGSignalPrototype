package com.example.controller;

import com.example.model.ECG;
import com.example.model.Patient;
import com.example.services.PatientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

@RestController
@RequestMapping(value = "/patient")
public class PatientController {

    @Autowired
    private PatientServices ps;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getPatients(){
    	List<Patient> ans=ps.getPatients();
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{patientId}")
    public ResponseEntity<?> getPatient(@PathVariable Long patientId) {
		Patient ans=ps.getPatient(patientId);
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @RequestMapping(method = RequestMethod.POST, path = "/new")
    public ResponseEntity<?> postPatient(@RequestBody Patient p) {
        ps.savePatient(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updatePatient(@RequestBody Patient p) {
        ps.updatePatient(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @MessageMapping("/beginECG")
    @SendTo("/topic/ECGsignal")
    public ECG sendECGsignal() throws InterruptedException{
        ECG ans=ps.getECGSignal();
        return ans;
    }
}
