package lt.codeacademy.rest.entities;


import lombok.Data;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@Entity
@Table(name="Purchase")
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="purchase_id")
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="travel_id" ,referencedColumnName="travel_id")
    private Travel travel;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;


}
