package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Embeddable
public class Address {
	public Address(){}
@Column(name = "street")
private String street;

public String getStreet() {
return street;
}

public void setStreet(String street) {
this.street = street;
}
@Column(name = "zip")
private Integer zip;

public Integer getZip() {
return zip;
}

public void setZip(Integer zip) {
this.zip = zip;
}
@Column(name = "city")
private String city;

public String getCity() {
return city;
}

public void setCity(String city) {
this.city = city;
}
        }
