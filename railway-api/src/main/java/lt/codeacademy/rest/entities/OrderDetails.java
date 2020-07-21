package lt.codeacademy.rest.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="OrderDetails")
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="orderdetail_id")
    private Long id;

    @Column(name="start_destination")
    private String startdestination;

    @Column(name="end_destination")
    private String enddestination;

    @Column(name="date")
    private String date;

    @Column(name="name")
    private String name;

    @Column(name="lastname")
    private String userlastname;

    @Column(name="ticket_code")
    private String ticketcode;
}
